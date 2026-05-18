import { join } from "node:path";
import { tmpdir } from "node:os";
import { App } from "./index";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function withTimeout<T>(label: string, promise: Promise<T>, ms = 15_000): Promise<T> {
  let timeout: NodeJS.Timeout | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<never>((_resolve, reject) => {
        timeout = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
      }),
    ]);
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}

async function step(label: string, action: () => Promise<void>): Promise<void> {
  console.log(label);
  await withTimeout(label, action());
  await sleep(450);
}

async function runDemo(): Promise<void> {
  console.log("한글 자동화 데모 시작");
  const app = new App({ visible: true });
  const outputPath = join(tmpdir(), `tshwpx-visible-demo-${Date.now()}.hwp`);

  try {
    await withTimeout("한글 초기화", app.ready, 30_000);

    await step("1. 새 문서 생성", () => app.file.new());
    await step("2. 제목 입력", () => app.doc.insertText("tshwpx 실제 한글 자동화 데모\n"));
    await step("3. 제목 굵게 적용", () => app.doc.charShape.bold.toggle());
    await step("4. 제목 크기 키우기", async () => {
      await app.doc.charShape.height.increase();
      await app.doc.charShape.height.increase();
      await app.doc.charShape.height.increase();
    });
    await step("5. 본문 입력", () =>
      app.doc.insertText("이 스크립트는 mock 테스트가 아니라 실행 중인 한글 창에 직접 명령을 보냅니다.\n"),
    );
    await step("6. 문단 가운데 정렬", () => app.doc.paragraph.align.center());
    await step("7. 글자색 빨강으로 변경", () => app.doc.charShape.textColor.set("red"));
    await step("8. 추가 문장 입력", () => app.doc.insertText("글자 모양, 문단, 커서, 쪽 동작이 순서대로 적용됩니다.\n"));
    await step("9. 오른쪽 정렬", () => app.doc.paragraph.align.right());
    await step("10. 오른쪽 정렬 문장 입력", () => app.doc.insertText("오른쪽 정렬 확인\n"));
    await step("11. 양쪽 정렬", () => app.doc.paragraph.align.justify());
    await step("12. 밑줄 적용", () => app.doc.charShape.underline.toggle());
    await step("13. 밑줄 문장 입력", () => app.doc.insertText("밑줄과 글자색이 적용된 문장\n"));
    await step("14. 문서 처음으로 이동", () => app.doc.cursor.move.document.begin());
    await step("15. 문서 끝으로 이동", () => app.doc.cursor.move.document.end());
    await step("16. 쪽 번호 삽입", () => app.doc.pages.numbering.insert());
    await step("17. 쪽 나누기", () => app.doc.pages.break());
    await step("18. 마지막 문장 입력", () => app.doc.insertText("두 번째 쪽까지 자동으로 만들어졌습니다.\n"));
    await step("19. 파일 저장", () => app.saveAs(outputPath, "HWP"));

    console.log(`완료: ${outputPath}`);
    console.log("한글 창은 10초 뒤 닫힙니다.");
    await sleep(10_000);
    await withTimeout("한글 종료", app.quit(), 10_000);
  } catch (error) {
    await withTimeout("실패 후 한글 종료", app.quit(), 3_000).catch(() => undefined);
    throw error;
  }
}

async function main(): Promise<void> {
  try {
    await runDemo();
  } catch (error: unknown) {
    console.error(error);
    process.exit(1);
  }
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

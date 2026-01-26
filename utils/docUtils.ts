import path from 'path';
import fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export class DocxUtils {

  static async createSampleDocx(options?: {
    fileName?: string;
    title?: string;
    bodyText?: string[];
  }): Promise<string> {

    const fileName = options?.fileName ?? 'sample.docx';
    const title = options?.title ?? 'Playwright DOCX Test';
    const bodyText = options?.bodyText ?? [
      'This document is generated using Playwright automation.',
      'DOCX creation and upload validation test.',
    ];

    const outputDir = path.resolve(process.cwd(), 'test-data', 'generated');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const filePath = path.join(outputDir, fileName);

    const paragraphs: Paragraph[] = [];

    // Title
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({ text: title, bold: true, size: 32 }),
        ],
      })
    );

    // Body
    bodyText.forEach(text => {
      paragraphs.push(
        new Paragraph({
          children: [new TextRun(text)],
        })
      );
    });

    const doc = new Document({
      sections: [{ children: paragraphs }],
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(filePath, buffer);

    return filePath;
  }
}

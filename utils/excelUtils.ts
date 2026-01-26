import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';

export class ExcelUtils {
  /**
   * Creates a simple XLSX file and returns absolute file path.
   */
  static async createSampleExcel(options?: {
    fileName?: string;
    sheetName?: string;
    headers?: string[];
    rows?: (string | number | boolean | null)[][];
  }): Promise<string> {
    const fileName = options?.fileName ?? 'report.xlsx';
    const sheetName = options?.sheetName ?? 'Report';
    const headers = options?.headers ?? ['ID', 'Name', 'Status'];
    const rows =
      options?.rows ??
      [
        [1, 'Ashish', 'Active'],
        [2, 'Playwright', 'Pending'],
      ];

    const outputDir = path.resolve(process.cwd(), 'test-data', 'generated');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const filePath = path.join(outputDir, fileName);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetName);

    // Header row
    sheet.addRow(headers);

    // Data rows
    rows.forEach((r) => sheet.addRow(r));

    // Make header bold (nice touch)
    sheet.getRow(1).font = { bold: true };

    await workbook.xlsx.writeFile(filePath);
    return filePath;
  }
}

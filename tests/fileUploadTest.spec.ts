import{test,Page} from '@playwright/test';
import { FileUpload } from '../pages/FileUpload';
import path from 'path';
import { ExcelUtils } from '../utils/excelUtils';
import { DocxUtils } from '../utils/docUtils';

test('@regression @fileUploadTest User is able to upload the files sucessfully', async({page})=>{
    const fileUploadTest=new FileUpload(page);
    await fileUploadTest.open();
    await fileUploadTest.fileUpload('C:\\Users\\akord\\Downloads\\TestFile.txt');
}

)


test('@regression @excel Excel create and upload', async ({ page }) => {
  const uploadPage = new FileUpload(page);

  // 1) Create Excel
  const filePath = await ExcelUtils.createSampleExcel({
    fileName: 'report.xlsx',
    headers: ['ID', 'Name', 'Status'],
    rows: [
      [1, 'Playwright', 'Active'],
      [2, 'Excel Upload', 'OK'],
    ],
  });

  // 2) Upload to Herokuapp
  await uploadPage.open();
  await uploadPage.fileUpload(filePath);
});


test('@regression @docx DOCX create and upload', async ({ page }) => {
  const uploadPage = new FileUpload(page);

  // 1️⃣ Create DOCX
  const filePath = await DocxUtils.createSampleDocx({
    fileName: 'playwright-doc-test.docx',
    title: 'Playwright DOCX Automation',
    bodyText: [
      'This DOCX file was created during an automated test.',
      'It is uploaded to Herokuapp for validation.',
    ],
  });

  // 2️⃣ Upload DOCX
  await uploadPage.open();
  await uploadPage.fileUpload(filePath);

  // 3️⃣ Assert upload success
});
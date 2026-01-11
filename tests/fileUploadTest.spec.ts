import{test,Page} from '@playwright/test';
import { FileUpload } from '../pages/FileUpload';

test('@regression @fileUploadTest User is able to upload the files sucessfully', async({page})=>{
    const fileUploadTest=new FileUpload(page);
    await fileUploadTest.open();
    await fileUploadTest.fileUpload('C:\\Users\\akord\\Downloads\\TestFile.txt');
}

)
import{Page, Locator, expect} from '@playwright/test';

export class FileUpload{

    readonly page:Page;
    readonly FileUploaderHeading:Locator;
    readonly InformationHeading:Locator;
    readonly chooseFileButton:Locator;
    readonly uploadButton:Locator;
    readonly dragAndDropArea:Locator;
    readonly FileUploadedHeader:Locator;
    readonly uploadedFileName:Locator;



    constructor(page:Page){
        this.page=page;
        this.FileUploaderHeading=page.getByRole('heading', { name: 'File Uploader' });
        this.InformationHeading=page.getByText('Choose a file on your system');
        this.chooseFileButton=page.getByRole('button', { name: 'Choose File' });
        this.uploadButton=page.getByRole('button', { name: 'Upload' });
        this.dragAndDropArea=page.locator('#drag-drop-upload');
        this.FileUploadedHeader=page.getByRole('heading', { name: 'File Uploaded!' });
        this.uploadedFileName=page.locator('#uploaded-files');
    }

    async open(){
        await this.page.goto('/upload')
        await expect(this.page).toHaveURL('/upload');
        await expect(this.InformationHeading).toHaveText('Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');
        await expect(this.FileUploaderHeading).toHaveText('File Uploader');
    }

    async fileUpload(filePath:string){
        // use a real file path (relative or absolute)
        await this.chooseFileButton.setInputFiles(filePath);
        await this.uploadButton.click();
        await expect(this.FileUploadedHeader).toHaveText('File Uploaded!');
        await expect(this.uploadedFileName).toHaveText('TestFile.txt');
    }



}
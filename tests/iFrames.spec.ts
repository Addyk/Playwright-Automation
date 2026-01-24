import { Page,expect ,test} from "@playwright/test";
import { iFrames } from "../pages/iFrames";


test('@regression @iFramesTest User is able to type text in iFrame', async({page})=>{
    const iFramesPage=new iFrames(page);
    await iFramesPage.open();
    const textToType='Hello, this is a test text inside the iFrame!';
    await iFramesPage.typeInFrame(textToType);
    const frameText=await iFramesPage.getFrameText();
    expect(frameText).toBe(textToType);
})
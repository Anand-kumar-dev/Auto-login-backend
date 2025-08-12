import { chromium } from 'playwright-chromium'
import visionPkg from '@google-cloud/vision';
const { ImageAnnotatorClient } = visionPkg;


export async function auto(req ,res) {
 const userAgent = req.headers['user-agent'];
  const {Enrollment ,Password} = req.body;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:userAgent
  });
  const page = await context.newPage();

  await page.goto("https://app.utu.ac.in/stud/")


  await page.click("#txtUserName");
  await page.fill('#txtUserName',Enrollment );

  await page.click("#txtPassword");
  await page.fill('#txtPassword', Password);

  const captcha = page.locator('#divCaptchaImg img');
 


const resCaptcha  = await detvision("captcha.png") 
  
 await page.click("#txtCaptcha");
  await page.fill('#txtCaptcha', resCaptcha );
   
   
  await page.click('#btnLogin')
  await page.waitForLoadState('domcontentloaded')
  

  const cokkies = await context.cookies();
  console.log("here are "+ JSON.stringify(cokkies))
  console.log("done")

 
  if(cokkies.length == 3){
    res.send(cokkies)
  }else{
    auto(req,res)
  }
  await browser.close()

}








async function detvision(img) {
  const client = new ImageAnnotatorClient({
    keyFilename: process.env.GCP_CREDENTIALS,
  });


  const [result] = await client.textDetection(img);
  const detections = result.textAnnotations;
 
  if (detections.length > 0) {

    console.log('🔍 Detected text:');
    const solvedCaptcha = detections[0].description.trim()
    console.log(solvedCaptcha);
     
  
    return solvedCaptcha;

  } else {
    console.log('No text found.');
  }

}

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({  // Một số setup giúp theo dõi được tiến trình, full screen...
      headless: false, 
      defaultViewport: null, 
      args: ['--start-fullscreen'] 
  });
  const page = await browser.newPage();
  
  const YOUR_EMAIL = 'nguyenxuanvu0307.tx@gmail.com';
  const YOUR_PASSWORD = 'Xuanvu0307@';

  const login = async () => {
    await page.goto('https://www.youtube.com/watch?v=WOhtW3KxGHo&list=PLuJJZ-W1NwdqgvE0D-1SMS7EpWIC5cKqu&index=3')
    const buttonLogin = await page.$$('#meta')
   console.log(buttonLogin);

   
    

  }

  await login();
})();
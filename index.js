setInterval(() => {
   date = new Date();
   hTime = date.getHours();
   mTime = date.getMinutes();
   sTime = date.getSeconds();
   hRotation = 30*hTime + mTime/2;
   mRotation = 6*mTime;
   sRotation = 6*sTime;

   hour.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;

},1000);

import kaplay from "kaplay";
export default function initKaplay(){
   return kaplay({
     width: 1920,
     letterbox:true,
     height: 1080,  
     global: false, 
     debug:true, //todo put back to false
     debugKey: " f1",
     canvas :document.getElementById("game"),
     pixelDensity:devicePixelRatio,
     
   });
}
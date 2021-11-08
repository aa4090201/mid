var topbut=document.getElementsByClassName("btn-KHAN");
var topdiv=document.getElementsByClassName("khandata");
var midbut=document.getElementsByClassName("btn-ShowMaker");
var middiv=document.getElementsByClassName("SMdata");
var jgbut=document.getElementsByClassName("btn-Canyon");
var jgdiv=document.getElementsByClassName("Canyondata");
var adbut=document.getElementsByClassName("btn-Ghost");
var addiv=document.getElementsByClassName("Ghostdata");
var supbut=document.getElementsByClassName("btn-BeryL");
var supdiv=document.getElementsByClassName("BeryLdata");
var datadiv=document.getElementsByClassName("table");
var toptemp=1; 
var midtemp=1; 
var adtemp=1; 
var jgtemp=1; 
var suptemp=1; 
var tempdata=1;
function temp(){
  
  if(toptemp==1||midtemp==1||adtemp==1||suptemp==1||jgtemp==1)
  { 
  datadiv[0].style="display:none";
  datatemp=1; 
  }
  else
    {
      datadiv[0].style="display:''";
      datatemp=0;
    }
}
topbut[0].onclick=function()
{

  if(toptemp==0)
  { 
  topdiv[0].style="display:none";
  toptemp=1; 
  }
  else
    {
    topdiv[0].style="display:''";
    toptemp=0;
    }
    if(toptemp==1&&midtemp==1&&adtemp==1&&suptemp==1&&jgtemp==1)
    { 
    datadiv[0].style="display:none";
    datatemp=1; 
    }
    if(toptemp==0||midtemp==0||adtemp==0||suptemp==0||jgtemp==0)
    {
      datadiv[0].style="display:''";
      datatemp=0;
    }
}
midbut[0].onclick=function(){

      if(midtemp==0)
      {
      middiv[0].style="display:none";
      midtemp=1; 
      }
      else
        {
        middiv[0].style="display:''";
        midtemp=0;
        }
        if(toptemp==1&&midtemp==1&&adtemp==1&&suptemp==1&&jgtemp==1)
        { 
        datadiv[0].style="display:none";
        datatemp=1; 
        }
        if(toptemp==0||midtemp==0||adtemp==0||suptemp==0||jgtemp==0)
        {
          datadiv[0].style="display:''";
          datatemp=0;
        }
}
jgbut[0].onclick=function()
{

  if(jgtemp==0)
  { 
  jgdiv[0].style="display:none";
  jgtemp=1; 
  }
  else
    {
    jgdiv[0].style="display:''";
    jgtemp=0;
    }
    if(toptemp==1&&midtemp==1&&adtemp==1&&suptemp==1&&jgtemp==1)
    { 
    datadiv[0].style="display:none";
    datatemp=1; 
    }
    if(toptemp==0||midtemp==0||adtemp==0||suptemp==0||jgtemp==0)
    {
      datadiv[0].style="display:''";
      datatemp=0;
    }
} 
adbut[0].onclick=function()
{

  if(adtemp==0)
  { 
  addiv[0].style="display:none";
  adtemp=1; 
  }
  else
    {
    addiv[0].style="display:''";
    adtemp=0;
    }
    if(toptemp==1&&midtemp==1&&adtemp==1&&suptemp==1&&jgtemp==1)
    { 
    datadiv[0].style="display:none";
    datatemp=1; 
    }
    if(toptemp==0||midtemp==0||adtemp==0||suptemp==0||jgtemp==0)
    {
      datadiv[0].style="display:''";
      datatemp=0;
    }
} 
supbut[0].onclick=function()
{
 
  if(suptemp==0)
  { 
  supdiv[0].style="display:none";
  suptemp=1; 
  }
  else
    {
    supdiv[0].style="display:''";
    suptemp=0;
    }
    if(toptemp==1&&midtemp==1&&adtemp==1&&suptemp==1&&jgtemp==1)
    { 
    datadiv[0].style="display:none";
    datatemp=1; 
    }
    if(toptemp==0||midtemp==0||adtemp==0||suptemp==0||jgtemp==0)
    {
      datadiv[0].style="display:''";
      datatemp=0;
    }
}    

const { Telegraf } = require('telegraf')
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const binarySearch=`
public static void binarySearch(int arr[], int first, int last, int key){  
    int mid = (first + last)/2;  
    while( first <= last ){  
       if ( arr[mid] < key ){  
         first = mid + 1;     
       }else if ( arr[mid] == key ){  
         System.out.println("Element is found at index: " + mid);  
         break;  
       }else{  
          last = mid - 1;  
       }  
       mid = (first + last)/2;  
    }  
    if ( first > last ){  
       System.out.println("Element is not found!");  
    }  
  }  
  `

bot.start((ctx) => ctx.reply("Welcome to Srijit's Algo Bot 😋 send /binarySearch or send sticker"));
bot.command('binarySearch', (ctx) => ctx.reply(binarySearch))
bot.on('sticker' ,(ctx)=> ctx.reply("🫢🫢🫢🫨🙈"));
bot.launch();
import { ofetch } from 'ofetch'
import { PrismaClient } from '@prisma/client'

const API_URL = "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay?format=json";
const MALE = "male";
const FEMALE = "female";

// prisma client singleton
const prismaClientSingleton = () => {
  return new PrismaClient();
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// data for service about vaccinated
export const getVaccinated = async () => {
  const d = await prisma.chart_data.findMany({
    orderBy:{
      date: "desc"
    },  
    take:25  
  })
  return d
}

// data for service about gender
export const getSexData = async () => {

  let cnt:number = 0;

  let max:number = 0; 
  
  const d:any = await prisma.$queryRaw`SELECT COUNT(sex) as cnt FROM chart_data WHERE sex is false`
   
  if(d.length>0){
    cnt = Number(d[0].cnt);
    max = await prisma.chart_data.count();
  }
  console.log(cnt)
  return [
    { type: MALE, value: cnt },
    { type: FEMALE, value: (max-cnt) }
  ]
  
}

export const parseRemoteAPI = async (tresholdDate:Date) => {
  const result = await ofetch(API_URL, { parseResponse: JSON.parse }).catch((error) => error.data);;
  var items = [];
  for (let item of result.results){
   
    if(tresholdDate<new Date(item.date)){
      
      // this is necessary for graph demo, because all parsed records of sex field are "all"
      const sex = (Math.floor(Math.random()*2))==0?false:true;
            
      items.push({value:item.metric_value, date:new Date(item.date), sex:sex})
    } else {
      console.log("skipping row..." + item.date );
    }
  }
  
  return items;
};
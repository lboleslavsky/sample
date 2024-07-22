import type { NextApiRequest, NextApiResponse } from 'next'
import prisma, { parseRemoteAPI } from "../../utils/db";

type ResponseData = {
  message: string
}

const MSG_OK = 'OK';
const MSG_NO_DATA = 'NO DATA TO SAVE';
const NO_DATA_SAVED = 'NO DATA SAVED';
const MIN_DATE = "1980-02-02T00:00:00.000Z";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const maxDate: any = await prisma.$queryRaw`SELECT MAX(date) as max_date FROM chart_data`
  
  var d: any;
  var tresholdDate:Date;  

  if (maxDate.length > 0) {
    tresholdDate = new Date(maxDate[0].max_date);
  } else {
    tresholdDate=new Date(MIN_DATE)
  }

  d = await parseRemoteAPI(tresholdDate);

  if (d.length == 0) {
    res.status(200).json({ message: MSG_NO_DATA });
    return;
  }

  const r = await prisma.chart_data.createMany({ data: d });
  if(r.count>0){
    res.status(200).json({ message: MSG_OK });
  } else {
    res.status(200).json({ message: NO_DATA_SAVED });
  }
}
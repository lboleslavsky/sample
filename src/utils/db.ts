import graphData from '@/models/graphData';
import mongoose from 'mongoose'
import {ofetch} from 'ofetch'

const API_URL = "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay?format=json"

const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }
  const uri = process.env.MONGODB_URI;
  //await mongoose.connect(uri);
};

dbConnect().catch((err) => console.log(err));

export default dbConnect;

// dummy data for service, TODO: mongoose
export const getVaccinated = async () => {
  return data
  //return await graphData().find()
}

// dummy data for service,  TODO: mongoose
export const getSexData = async () => {
  return [
    { type: 'male', value: 35 },
    { type: 'female', value: 65 }
  ]
}

export const parseRemoteAPI = async ()=>{
  const result = await ofetch(API_URL, { parseResponse: JSON.parse }).catch((error) => error.data);;
  return result.results;  
};

const data = [
  {
    "date": "2007-04-23",
    "value": 93.24
  },
  {
    "date": "2007-04-24",
    "value": 95.35
  },
  {
    "date": "2007-04-25",
    "value": 98.84
  },
  {
    "date": "2007-04-26",
    "value": 99.92
  },
  {
    "date": "2007-04-29",
    "value": 99.8
  },
  {
    "date": "2007-05-01",
    "value": 99.47
  },
  {
    "date": "2007-05-02",
    "value": 100.39
  },
  {
    "date": "2007-05-03",
    "value": 100.4
  },
  {
    "date": "2007-05-04",
    "value": 100.81
  },
  {
    "date": "2007-05-07",
    "value": 103.92
  }]
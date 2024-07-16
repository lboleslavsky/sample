import { trpc } from '../utils/trpc';
import type { NextPageWithLayout } from './_app';
import type { inferProcedureInput } from '@trpc/server';
import Link from 'next/link';
import { Fragment } from 'react';
import type { AppRouter } from '../server/routers/_app';

const IndexPage: NextPageWithLayout = () => {
  const utils = trpc.useUtils();
  const data =  trpc.getData.useQuery()
  console.log(data.data)
  
  return (
    <>Calling data</>
  );
};

export default IndexPage;
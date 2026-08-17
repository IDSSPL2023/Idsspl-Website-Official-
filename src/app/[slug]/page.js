import { notFound } from 'next/navigation';
import CoreBankingSystem from '@/components/CoreBankingSystem';
import { solutionsData } from '@/constants/solutions';
import Products from '@/components/CoreBankingSystem';

export default async function Page({ params }) {
    const { slug } = await params;
    const data = solutionsData[slug];

    if (!data) return notFound();

    return <Products data={data} />;
}

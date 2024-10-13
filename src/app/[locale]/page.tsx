import {getSEOTags} from "@/lib/seo"
import Script from 'next/script'
import FullscreenIframe from "./FullscreenIframe";
import {getTranslations} from "next-intl/server";
import { Gamepad2, Zap, Star, Layout, Target, Users, ImageIcon } from 'lucide-react';
import Image from 'next/image'

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('home.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/",
        description: t('description'),
        keywords: t('keywords'),
    })
}

export default async function Home() {
    const t = await getTranslations('home');

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-16 text-gray-300">
            <Script
                id="block-blast-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": "Block Blast",
                        "description": t('Metadata.description'),
                        "genre": ["益智游戏", "策略游戏", "休闲游戏"],
                        "playMode": "SinglePlayer",
                        "applicationCategory": "Browser Game",
                    })
                }}
            />

            <section id="hero" className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-white">{t('hero.title')}</h1>
                <p className="mb-2 text-gray-200">{t('hero.subtitle')}</p>
            </section>

            <section id="play" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Gamepad2 className="mr-2" /> {t('play.title')}
                </h2>
                <p className="mb-6">
                    {t('play.description')}
                </p>
                <FullscreenIframe
                    thumbnailSrc="/img/s11080.jpg"
                    src="/game/block-blast/index.html"
                    title="Block Blast Gameplay"
                />
            </section>

            <section id="introduction" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Zap className="mr-2" /> {t('introduction.title')}
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                    {t('introduction.content')}
                </p>
            </section>

            <section id="screenshots" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <ImageIcon className="mr-2" /> {t('screenshots.title')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="relative aspect-square">
                            <Image
                                src={`/img/s${num}1080.jpg`}
                                width={1080}
                                height={633}
                                alt={`Block Blast 游戏截图 ${num}`}
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section id="rules" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Layout className="mr-2" /> {t('rules.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    {t.raw('rules.items').map((item:string, index:number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section id="how-to-play" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Target className="mr-2" /> {t('howToPlay.title')}
                </h2>
                <ol className="list-decimal pl-6 space-y-2 text-lg">
                    {t.raw('howToPlay.steps').map((step:string, index:number) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>

            <section id="features" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Star className="mr-2" /> {t('features.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    {t.raw('features.items').map((item:string, index:number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section id="player-reviews" className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Users className="mr-2" /> {t('playerReviews.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.raw('playerReviews.reviews').map((review: { content: string; author: string }, index: number) => (
                        <blockquote key={index} className="bg-gray-700 p-4 rounded-lg italic">
                            &ldquo;{review.content}&rdquo;
                            <footer className="mt-2 text-right">- {review.author}</footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            <footer className="text-center mt-8">
                <p>{t('footer.copyright')}</p>
            </footer>
        </div>
    )
}

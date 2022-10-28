import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';

const links = [];
const hostname = 'https://wiki.sanoon.me/';

export const transformHtml = (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
        console.log(pageData)
        links.push({
            url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
            lastmod: pageData.lastUpdated
        })
    }
}

export const buildEnd = ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
}

---
title: VitePress 集成 Algolia
head:
- - meta
  - property: og:title
    content: VitePress 集成 Algolia
- - meta
  - name: description
    content: VitePress 集成 Algolia，Algolia 申请, Algolia 索引建立.
- - meta
  - name: keywords
    content: VitePress, Algolia
- - meta
  - property: og:description
    content: VitePress 集成 Algolia，Algolia 申请, Algolia 索引建立.
---
  
## 1、Algolia 申请

VitePress 支持配置 Algolia，因此我们只需要申请 Algolia 的 [DOCSEARCH](https://docsearch.algolia.com/apply/) 即可，申请之后会收到一封邮件，你需要直接回复，你拥有该网站的管理权限，并且有权限修改代码。

```json
# config.ts 文件中的 algolia 搜索配置信息
{
    appId: '',
    apiKey: '',
    indexName: '',
    placeholder: '请输入关键字',
    buttonText: '搜索'
}
```
    
接着对方会使用 DOCSEARCH 爬取你的网站并发送需要注入的代码过来，我们需要将其中的 appId、apiKey、indexName 配置到上述的 algolia 节点中，重新部署网站即可。

## 2、Algolia 爬虫

DOCSEARCH 一般情况下一周爬取一次网站的最新信息，声称最新的索引信息，如果希望手动刷新，可以登录到[爬虫后台](https://crawler.algolia.com/admin/crawlers/)进行手动触发。

    

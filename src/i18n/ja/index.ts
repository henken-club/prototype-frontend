import type {BaseTranslation} from 'typesafe-i18n';

const ja: BaseTranslation = {
  head: {
    title: {
      home: 'ホーム',
      about: 'henken.clubとは',
      welcome: 'ようこそ henken.clubへ',
      login: 'ログイン',
      users: `{displayName:string}(@{alias:string})のページ`,
      usersPrejudice: `{fromDisplayName:string}から{toDisplayName:string}への偏見#{number:number}`,
      usersPrejudiceAnswer: `{fromDisplayName:string}から{toDisplayName:string}への偏見#{number:number}の回答`,
      loading: 'ロード中',
      authors: `{name:string}の作者ページ`,
      book: `{title:string}の本ページ`,
      searchAuthors: `『{query:string}』の著者の検索結果 | {page:number}ページ目`,
    },
  },
  common: {
    フォロー中: 'フォロー中',
    フォロイー: 'フォロイー',
    フォロワー: 'フォロワー',
    フォローする: 'フォローする',
    ログイン: 'ログイン',
    回答: '回答',
  },
  count: {
    フォロイー: '{count} フォロイー',
    フォロワー: '{count} フォロワー',
  },
  footer: {
    About: 'About',
    Terms: 'Terms',
    Contact: 'Contact',
    copyright: '© 2021 henken.club',
  },
  pageUser: {
    あなたのページです: 'あなたのページです',

    'フォローを解除しますか?': 'フォローを解除しますか?',
    解除する: '解除する',
    解除しない: '解除しない',

    送った偏見: '送った偏見',
    送信した偏見はまだありません: '送った偏見はまだありません',

    受け取った偏見: '受け取った偏見',
    受け取った偏見はまだありません: '受け取った偏見はまだありません',

    回答した偏見: '回答した偏見',
    回答した偏見はまだありません: '回答した偏見はまだありません',
  },
  pageSearchAuthors: {
    検索結果: '『{query:string}』の著者の検索結果',
    ありませんでした: 'ありませんでした',
    _件見つかりました: '{total:number}件見つかりました',
    _件中_件までを表示中: '{total:number}件中{to:number}件までを表示中',
    _件中_件から_件までを表示中:
      '{total:number}件中{from:number}件から{to:number}件までを表示中',
  },
};

export default ja;

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
    },
  },
};

export default ja;

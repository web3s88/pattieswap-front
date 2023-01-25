import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PattieSwap',
  description:
    'The most popular AMM on BSC by user count! Earn PATC through yield farming, then stake it in Syrup Pools to earn more tokens!',
  image: 'https://swap.pattieswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PattieSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('PattieSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('PattieSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('PattieSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('PattieSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('PattieSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PattieSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PattieSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('PattieSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PattieSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('PattieSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PattieSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PattieSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PattieSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PattieSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('PattieSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('PattieSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('PattieSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PattieSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PattieSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PattieSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PattieSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PattieSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('PattieSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PattieSwap')}`,
      }
    default:
      return null
  }
}

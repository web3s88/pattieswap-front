import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'PATC',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x46777d443A2e41091fCC5e305D7caf64BBa455Aa',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PATC-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xD87b639850FC88b6F616a6CDBcDaFD345022CE6E',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x64edC2C7882FFa5B2b94d666e24f3b8613669ED8',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'PATTIE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3b14B6b3bd688e8E19EC1B72979e2A1DBEf05193',
    },
    token: serializedTokens.pattie,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'PATTIE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05F472b6c5b908C96FF2140eF2Fe5aa646665BCb',
    },
    token: serializedTokens.pattie,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'PATTIE-PATC LP',
    lpAddresses: {
      97: '',
      56: '0x02bF1a6A842d4563F26870a6Ed1Ed7B0216280B7',
    },
    token: serializedTokens.pattie,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 6,
    lpSymbol: 'PATC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xFB7bA81b4b4390609390940c5554cF46Eaf057E9',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'PATTIE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x4DBdBea94ad2fB53E13487F8144C018826cC5619',
    },
    token: serializedTokens.pattie,
    quoteToken: serializedTokens.usdt,
  },
  
  {
    pid: 8,
    lpSymbol: 'PATC-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x36447dF2ccfee58D44E8e2DD1cEe4460Baa03F2d',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
]

export default farms

/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  customers: {
    index: typeof routes['customers.index']
    store: typeof routes['customers.store']
    update: typeof routes['customers.update']
  }
  items: {
    index: typeof routes['items.index']
    store: typeof routes['items.store']
    update: typeof routes['items.update']
  }
  orders: {
    index: typeof routes['orders.index']
    store: typeof routes['orders.store']
    updateStatus: typeof routes['orders.update_status']
  }
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
}

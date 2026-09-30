/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'customers.index': {
    methods: ["GET","HEAD"],
    pattern: '/customer',
    tokens: [{"old":"/customer","type":0,"val":"customer","end":""}],
    types: placeholder as Registry['customers.index']['types'],
  },
  'customers.store': {
    methods: ["POST"],
    pattern: '/customer',
    tokens: [{"old":"/customer","type":0,"val":"customer","end":""}],
    types: placeholder as Registry['customers.store']['types'],
  },
  'customers.update': {
    methods: ["PUT"],
    pattern: '/customer/:id',
    tokens: [{"old":"/customer/:id","type":0,"val":"customer","end":""},{"old":"/customer/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['customers.update']['types'],
  },
  'items.index': {
    methods: ["GET","HEAD"],
    pattern: '/item',
    tokens: [{"old":"/item","type":0,"val":"item","end":""}],
    types: placeholder as Registry['items.index']['types'],
  },
  'items.store': {
    methods: ["POST"],
    pattern: '/item',
    tokens: [{"old":"/item","type":0,"val":"item","end":""}],
    types: placeholder as Registry['items.store']['types'],
  },
  'items.update': {
    methods: ["PUT"],
    pattern: '/item/:id',
    tokens: [{"old":"/item/:id","type":0,"val":"item","end":""},{"old":"/item/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['items.update']['types'],
  },
  'orders.index': {
    methods: ["GET","HEAD"],
    pattern: '/order',
    tokens: [{"old":"/order","type":0,"val":"order","end":""}],
    types: placeholder as Registry['orders.index']['types'],
  },
  'orders.store': {
    methods: ["POST"],
    pattern: '/order',
    tokens: [{"old":"/order","type":0,"val":"order","end":""}],
    types: placeholder as Registry['orders.store']['types'],
  },
  'orders.update_status': {
    methods: ["PUT"],
    pattern: '/order/:id',
    tokens: [{"old":"/order/:id","type":0,"val":"order","end":""},{"old":"/order/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['orders.update_status']['types'],
  },
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}

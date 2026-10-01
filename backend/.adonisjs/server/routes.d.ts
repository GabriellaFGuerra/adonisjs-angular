import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'customers.index': { paramsTuple?: []; params?: {} }
    'customers.store': { paramsTuple?: []; params?: {} }
    'customers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'items.index': { paramsTuple?: []; params?: {} }
    'items.store': { paramsTuple?: []; params?: {} }
    'items.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.store': { paramsTuple?: []; params?: {} }
    'orders.update_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'customers.index': { paramsTuple?: []; params?: {} }
    'items.index': { paramsTuple?: []; params?: {} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'customers.index': { paramsTuple?: []; params?: {} }
    'items.index': { paramsTuple?: []; params?: {} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'customers.store': { paramsTuple?: []; params?: {} }
    'items.store': { paramsTuple?: []; params?: {} }
    'orders.store': { paramsTuple?: []; params?: {} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'customers.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'items.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.update_status': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
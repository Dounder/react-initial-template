import { lazy } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy'

// import { LazyPage1, LazyPage2, LazyPage3 } from './../01-lazyload/pages'
type JSXComponent = () => JSX.Element

interface Route {
	path: string
	to: string
	Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
	name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyLayout' */ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload/',
		Component: LazyLayout,
		name: 'LazyLayout - Dashboard',
	},
	{
		path: 'no-lazy',
		to: '/no-lazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
]

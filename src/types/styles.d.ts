/**
 * Responsive 속성
 * - CSS 속성값을 break point별로 설정
 * - T: CSS 속성값의 타입
 * - Copy & Pasted
 */
export type ResponsiveProp<T> = {
    base?: T    // 640px 이하
    sm?: T      // 640px 이상
    md?: T      // 768px 이상
    lg?: T      // 1024px 이상
    xl?: T      // 1280px 이상
}
export type Responsive<T> = T | ResponsiveProp<T>

type SelfPosition = 
 | 'center'
 | 'end'
 | 'flex-end'
 | 'flex-start'
 | 'self-end'
 | 'self-start'
 | 'start'

type ContentPosition =
| 'center'
| 'end'
| 'flex-end'
| 'flex-start'
| 'start'

type ContentDistribution = 
 | 'space-around'
 | 'space-between'
 | 'space-evenlty'
 | 'stretch'

 type CSSPropertyGlobals =
 | '-moz-initial'
 | 'inherit'
 | 'initial'
 | 'revert'
 | 'unset'

export type CSSPropertyAlignItems =
 | CSSPropertyGlobals
 | SelfPosition
 | 'baseline'
 | 'normal'
 | 'stretch'
 // 코드 자동 보조
 | (string & {})

export type CSSPropertyAlignContent =
 | CSSPropertyGlobals
 | ContentDistribution
 | 'center'
 | 'end'
 | 'flex-end'
 | 'flex-start'
 | 'start'
 | 'baseline'
 | 'normal'
 | (string & {})

export type CSSPropertyJustifyItems =
 | CSSPropertyGlobals
 | SelfPosition
 | 'baseline'
 | 'left'
 | 'legacy'
 | 'normal'
 | 'right'
 | 'stretch'
 | (string & {})

export type CSSPropertyJustifyContent =
 | CSSPropertyGlobals
 | ContentDistribution
 | ContentPosition
 | 'left'
 | 'normal'
 | 'right'
 | (string & {})

export type CSSPropertyFlexWrap =
 | CSSPropertyGlobals
 | 'nowrap'
 | 'wrap'
 | 'wrap-reverse'

export type CSSPropertyFlexDirection =
 | CSSPropertyGlobals
 | 'column'
 | 'column-reverse'
 | 'row'
 | 'row-reverse'

export type CSSPropertyJustifySelf =
 | CSSPropertyGlobals
 | SelfPosition
 | 'auto'
 | 'baseline'
 | 'left'
 | 'normal'
 | 'right'
 | 'stretch'
 | (string & {})

export type CSSPropertyAlignSelf =
 | CSSPropertyGlobals
 | SelfPosition
 | 'auto'
 | 'baseline'
 | 'normal'
 | 'stretch'
 | (string & {})

/**
* Grid
*/
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
 | CSSPropertyGlobals
 | GridLine
 | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
 | CSSPropertyGlobals
 | 'column'
 | 'dense'
 | 'row'
 | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
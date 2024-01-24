/**
 * Responsive 속성
 * - CSS 속성값을 break point별로 설정
 * - T: CSS 속성값의 타입
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
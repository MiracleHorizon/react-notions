import sample from 'lodash.sample'
import { covers } from 'store/slices/decor'

const getRandomCover = () => sample(covers)

export default getRandomCover

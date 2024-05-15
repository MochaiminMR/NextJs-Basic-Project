import Link from 'next/link'
import PropTypes from 'prop-types'
import Card from './styled/Card'
import Image from './styled/Image'
import Title from './styled/Ttitle'

function RestaurantItem ({ id, pictureId, name, description }) {
  return (
    <Card>
      <Image
      height='200px'
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />

      <div className='container'>
        <Title>
          <Link href={`/detail/${id}`}>{name}</Link>
        </Title>
        <p>{description}</p>
        <br />
      </div>
    </Card>
  )
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default RestaurantItem

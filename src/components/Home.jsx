import { UncontrolledCarousel } from 'reactstrap';

function Home() {
  const items = [
    {
      src: 'https://i.imgur.com/H1GibiO.jpg',
      altText: 'd o g g o s',
      header: 'd o g g o s',
      key: '1',
    },
    {
      src: 'https://i.imgur.com/P4xpvC0.jpg',
      altText: 'me at Cardiff',
      header: 'me at Cardiff',
      key: '2',
    },
    {
      src: 'https://i.imgur.com/tkfXnn0.jpg',
      altText: 'beep beep you sad fuck',
      header: 'beep beep you sad fuck',
      key: '3',
    },
  ];
  return (
    <>
      <h1>Welcome to my website</h1>

      <div>
        <UncontrolledCarousel
          style={{ height: '100vh' }}
          indicators={false}
          controls={false}
          items={items}
        />
      </div>
    </>
  );
}

export default Home;

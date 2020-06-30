import PostForm from '../components/postform';
import PostCard from '../components/postcard';

const mock = {
	isLoggedIn: true,
	imagePaths: [],
	mainPosts: [{
		User: {
			id: 1,
			nickname: 'Ekalii',
		},
		content: 'First Card',
		img: 'https://avatars0.githubusercontent.com/u/16658067?s=460&u=09f9f385ffec1453896c9b079cc4fd503ee4cded&v=4'
	}],
};

export default function Home() {
  return (
    <>
      <div>
      	{mock.isLoggedIn && <PostForm imagePaths={mock.imagePaths}/>}
      	{
      		mock.mainPosts.map(v => {
      			return <PostCard key={v} post={v}/>
      		})
      	}
      </div>
    </>
  );
}

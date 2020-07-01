import { useSelector } from 'react-redux';

import PostForm from '../components/postform';
import PostCard from '../components/postcard';

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
    	{isLoggedIn && <PostForm />}
    	{
    		mainPosts.map(v => {
    			return <PostCard key={v} post={v}/>
    		})
    	}
    </div>
  );
}

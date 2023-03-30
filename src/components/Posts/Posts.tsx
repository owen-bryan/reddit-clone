import { Community } from '@/atoms/communitiesAtom';
import React from 'react';

type PostsProps = {
    communityData: Community;
};

const Posts:React.FC<PostsProps> = ({ communityData }) => {
    
    return <div>Posts</div>
}
export default Posts;
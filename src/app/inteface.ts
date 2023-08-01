interface Params {
  username: string;
}
interface Props {
  params: Params;
}

interface Post {
  id: number;
  caption: string;
  media_type: string;
  comments_count: number;
  like_count: number;
  media_url: string;
  permalink: string;
  timestamp: string;


}

export type { Props, Params,Post };


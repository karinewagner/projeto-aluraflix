import React, { SetStateAction } from "react";
import { ICurrentVideo } from "../../pages/types";
import * as S from "./styles";
import { IVideo } from "../../contexts/Videos/types";

export type VideoListProps = {
	list: IVideo[];
	color: string;
	setVideo: React.Dispatch<SetStateAction<ICurrentVideo>>;
};

const VideoList = ({ list, color, setVideo }: VideoListProps) => {
	const imageURL = "https://i3.ytimg.com/vi/";

	const handleCurrentVideo = (video: IVideo) => {
		const currentVideo = { ...video, color };
		setVideo(currentVideo);
	};

	return (
		<S.VideoList>
			{list.map((video, index) => (
				<S.VideoItem
					key={index}
					background={`url(${imageURL}${video.key}/maxresdefault.jpg)`}
					onClick={() => handleCurrentVideo(video)}
				></S.VideoItem>
			))}
		</S.VideoList>
	);
};

export default VideoList;

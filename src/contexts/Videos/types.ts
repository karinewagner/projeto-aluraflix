import React, { SetStateAction } from "react";

export interface IVideo {
	key: string;
	title: string;
	category: string;
	description: string;
}

export interface IVideosContext {
	videos: IVideo[];
	setVideos: React.Dispatch<SetStateAction<IVideo[]>>;
}

export type VideosProviderProps = {
	children: React.ReactNode;
};

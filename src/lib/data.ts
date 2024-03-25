import type { StaticImageData } from "next/image";
import drawHeroDashboard from "../../public/draw-hero-dashboard.png";
import drawHeroBoard from "../../public/draw-hero-board.png";
import drawHeroTeam from "../../public/draw-hero-team.png";
import tutorTrackrDashboard from "../../public/ttdashboard.png";
import tutorTrackrDetail from "../../public/ttdetail.png";
import tutorTrackrChat from "../../public/ttchat.png";
import bigbrain from "../../public/bigbrain_screenshot.png";
import lurkforwork from "../../public/lurkforwork_screenshot.png";

export type ImgInfo = {
  label: string;
  image: StaticImageData | null;
};

export type ProjectInfoT = {
  [key: string]: ImgInfo[];
};

export const projectInfo: ProjectInfoT = {
  "Tutor Trackr": [
    {
      label: "dashboard",
      image: tutorTrackrDashboard,
    },
    {
      label: "details",
      image: tutorTrackrDetail,
    },
    {
      label: "chat",
      image: tutorTrackrChat,
    }
  ],
  "Draw Hero": [
    {
      label: "dashboard",
      image: drawHeroDashboard,
    },
    {
      label: "board",
      image: drawHeroBoard,
    },
    {
      label: "Collaborate",
      image: drawHeroTeam,
    },
  ],
  More: [
    {
      label: "bigbrain",
      image: bigbrain,
    },
    {
      label: "lurkforwork",
      image: lurkforwork,
    },
    {
      label: "micro-react",
      image: null,
    }
  ],
};

type TechCategory = {
  [key: string]: { [key: string]: string };
};

export const techMap: TechCategory = {
  Languages: {
    javascript:
      "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
    typescript:
      "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
    python:
      "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
    cpp: "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png",
    c: "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
    bash: "https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png",
    html: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
    css: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
  },
  Frontend: {
    react:
      "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
    nextjs:
      "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
    angular:
      "https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png",
    bootstrap:
      "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
    tailwind:
      "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
    wordpress:
      "https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png",
    REST: "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png",
    GraphQL:
      "https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png",
    vite: "https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35",
  },
  Backend: {
    nodejs:
      "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
    express:
      "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
    Flask:
      "https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png",
    Django:
      "https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4",
    Pytest:
      "https://user-images.githubusercontent.com/25181517/184117132-9e89a93b-65fb-47c3-91e7-7d0f99e7c066.png",
    Jest: "https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png",
  },
  Database: {
    postgresql:
      "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
    sqlite3:
      "https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17",
    mongoDB:
      "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
    mysql:
      "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png",
    chroma: "https://docs.trychroma.com/img/chroma.svg",
  },
  Tools: {
    git: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
    figma:
      "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png",
    aws: "https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png",
    docker:
      "https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png",
    Postman:
      "https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png",
    Jira: "https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png",
  },
};

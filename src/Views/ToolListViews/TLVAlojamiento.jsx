import React from "react";

import Title  from "./../../components/title";
import BlockList from "./../../components/BlockList";
import Drive from "../../assets/images/tools/drive.jpg";
import Dropbox from "../../assets/images/tools/dropbox.jpg";
import OneDrive from "../../assets/images/tools/onedrive.jpg";
import Box from "../../assets/images/tools/box.jpg";
import Mega from "../../assets/images/tools/mega.jpg";
import iCloud from "../../assets/images/tools/icloud.jpg";
import AmazonDrive from "../../assets/images/tools/amazondrive.jpg";

import GitHub from "../../assets/images/tools/github.jpg";
import GitLab from "../../assets/images/tools/gitlab.jpg";
import Bitbucket from "../../assets/images/tools/bitbucket.jpg";
import AWSCodeCommit from "../../assets/images/tools/awscodecommit.jpg";
import SourceForge from "../../assets/images/tools/sourceforge.jpg";
import Beanstalk from "../../assets/images/tools/beanstalk.jpg";



export default function TLVAlojamiento(props) {
    return (
      <>
   <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a  bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title className="ns-c-e " h2="&#129150; Alojamiento"></Title>
       
      </div>
      <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a  bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title className=" " h3="&#129150; Alojamiento de archivos"></Title>
       
      </div>
      <BlockList
          ContentBox
          image
          btn
          image={Drive}
          title="Drive"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <BlockList
          ContentBox
          image
          btn
          image={OneDrive}
          title="OneDrive"
          text=" "
          btnText="Visitar"
        ></BlockList>
          <BlockList
          ContentBox
          image
          btn
          image={Dropbox}
          title="Dropbox"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <BlockList
          ContentBox
          image
          btn
          image={Box}
          title="Box"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <BlockList
          ContentBox
          image
          btn
          image={Mega}
          title="Mega"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <BlockList
          ContentBox
          image
          btn
          image={iCloud}
          title="iCloud"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <BlockList
          ContentBox
          image
          btn
          image={AmazonDrive}
          title="AmazonDrive"
          text=" "
          btnText="Visitar"
        ></BlockList>
         <div className="w-100 m-w-100 r-h-c p-20px ns-br-r-2 h-a  bg-d h-pr-fl-ma b-s-b-b   m-b-10px ">
        <Title className=" " h3="&#129150; Alojamiento de código"></Title>
       
      </div>
      <BlockList
          ContentBox
          image
          btn
          image={AmazonDrive}
          title="AmazonDrive"
          text=" "
          btnText="Visitar"
        ></BlockList>

<BlockList
          ContentBox
          image
          btn
          image={GitHub}
          title="GitHub "
          btnText="Visitar"
        ></BlockList>
<BlockList
          ContentBox
          image
          btn
          image={GitLab}
          title="GitLab "
          btnText="Visitar"
        ></BlockList>
<BlockList
          ContentBox
          image
          btn
          image={Bitbucket}
          title="Bitbucket "
          btnText="Visitar"
        ></BlockList>

<BlockList
          ContentBox
          image
          btn
          image={AWSCodeCommit}
          title="AWS CodeCommit "
          btnText="Visitar"
        ></BlockList>
<BlockList
          ContentBox
          image
          btn
          image={SourceForge}
          title="SourceForge "
          btnText="Visitar"
        ></BlockList>
<BlockList
          ContentBox
          image
          btn
          image={Beanstalk}
          title="Beanstalk "
          btnText="Visitar"
        ></BlockList>



        
    </>
  );
}

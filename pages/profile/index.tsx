import Sidebar from "@/components/common/Sidebar"
import SidebarTitle from "@/components/common/SidebarTitle"
import ProfileContent from "@/components/profile/ProfileContent"
import SidebarProfile from "@/components/profile/SidebarProfile"
import { education, experience, skill } from "@/stores/profile"
import styled from "styled-components"

export default function Profile() {
  return (
    <ProfileWrapper>
      <Sidebar
        sidebarTitle={<SidebarTitle title="Profile" isBack isDark />}
        sidebarContent={<SidebarProfile />}
      />
      <div className="profileContent">
        <ProfileContent
          profileTitle={<SidebarTitle title="Experience" />}
          profileContent={education}
        />
        <ProfileContent
          profileTitle={<SidebarTitle title="Education" />}
          profileContent={experience}
        />
        <ProfileContent
          profileTitle={<SidebarTitle title="Program Skill" />}
          profileContent={skill}
        />
      </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  .profileContent {
    display: flex;
  }
`

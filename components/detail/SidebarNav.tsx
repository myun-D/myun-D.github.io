import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components"

interface ISortNavProps{
  [key: string] : string
}

export default function SidebarNav({allWorks}: any){
  const router = useRouter();
  const [sortWorks, setSortWorks] = useState(allWorks);
  const [sortNav, setSortNav] = useState<ISortNavProps>({
    main: '',
    sub: ''
  });

  const handleSortNav = (type: string, relation: string) => {
    if(type === 'all'){
      setSortNav({
        ...sortNav,
        main: '',
        sub: ''
      })

      return;
    }
    
    if(sortNav[type] && (sortNav[type] === relation)){
      setSortNav({
        ...sortNav,
        [type]: ''
      })
    }else{
      setSortNav({
        ...sortNav,
        [type]: relation
      })
    }
  }

  const handleSort = () => {
    let newWorks = allWorks;

    if(sortNav.main){
      newWorks = allWorks.filter((item: any) => item.frontMatter.relation === sortNav.main);
    }
    if(sortNav.sub){
      newWorks = (sortNav.main ? newWorks : allWorks).filter((item: any) => item.frontMatter.meta === sortNav.sub);
    }

    setSortWorks(newWorks);
  }

  useEffect(() => {
    handleSort();
  }, [sortNav]);

  return(
    <SidebarContentWrapper>
      <div className="navWrapper">
        <ul className="mainNav nav">
          <li className={!sortNav.main && !sortNav.sub ? 'active' : ''} onClick={()=>handleSortNav('all','')}>전체</li>
          <li className={sortNav.main === "works" ? 'active' : ''} onClick={()=>handleSortNav('main','works')}>실무 프로젝트</li>
          <li className={sortNav.main === "personal" ? 'active' : ''} onClick={()=>handleSortNav('main','personal')}>개인 프로젝트</li>
        </ul>
        <ul className="subNav nav">
          <li className={sortNav.sub === "branding" ? 'active' : ''}  onClick={()=>handleSortNav('sub','branding')}>BRANDING</li>
          <li className={sortNav.sub === "editorial" ? 'active' : ''}  onClick={()=>handleSortNav('sub','editorial')}>EDITORIAL</li>
          <li className={sortNav.sub === "graphic" ? 'active' : ''}  onClick={()=>handleSortNav('sub','graphic')}>GRAPHIC</li>
        </ul>
      </div>
      <ul className="postList">
        {sortWorks?.length > 0 ? (
          <>
            {sortWorks.map((post:any, idx: any)=> (
              <li onClick={()=>router.push(`/works/${post.filename.split('.')[0]}`)} key={idx}>{post.frontMatter.subTitle}</li>
            ))}
          </>
        ) : (
          <li>선택하신 프로젝트가 없습니다.</li>
        )}
      </ul>
    </SidebarContentWrapper>
  )
}

const SidebarContentWrapper = styled.div`
  .navWrapper{
    padding: 2rem 1.5rem 1rem;
    .nav{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
      font-size: 1.4rem;
  
      &.mainNav{
        font-weight: 700;
      }
      li{
        cursor: pointer;
        border: 2px solid #fff;
        border-radius: 50rem;
        margin: 0 1rem 1rem 0;
        padding: 0.6rem 1.2rem 0.4rem;
        white-space: nowrap;
        font-weight: 500;
  
        &.active{
          background: #00FF00;
          border-color: #00FF00;
          color: #000;
        }
      }
    }
  }
  
  .postList{
    border-top: 2px solid #fff;
    li{
      padding: 1rem 1.5rem 0.8rem;
      border-bottom: 1px solid #fff;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`
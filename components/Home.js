import styles from '@/styles/home/home.module.scss';
import TableSection from '@/components/TableSection';
import { useRecoilState } from 'recoil';
import SlideAlert from '@/components/Utils/Common/SlideAlert';
import { showSlideAlert } from '@/data/atoms';
import Image from 'next/image';
import ProfileImage from '@/public/assets/my_profile_img.jpg';

const Home = () => {
    const [isAlertOpen, setIsAlertOpen] = useRecoilState(showSlideAlert);

    return (
        <div id={styles.home}>
            <div id={styles.header}>
                <div id={styles.welcome}>Welcome To My World</div>
                <div id={styles.description}>
                    <div>
                        <p>안녕하세요 개발자 이경수입니다.</p>
                        <p>
                            개인 블로그를 노션 스타일로 만들어보았습니다. (NextJS + NestJS + MySQL)
                        </p>
                        <p>글 추가 및 삭제, 이미지 업로드까지 가능하게 해두었습니다.</p>
                        <p>저에 대해서 더 알고 싶으시다면 아래를 참고하시기 바랍니다.</p>
                        <p>
                            <b>Blog : </b>
                            <a href="https://velog.io/@keinn51" target="_blank">
                                https://velog.io/@keinn51
                            </a>
                        </p>
                        <p>
                            <b>LinkedIn : </b>
                            <a
                                href="https://www.linkedin.com/in/kyung-soo-lee-6329b2247/"
                                target="_blank"
                            >
                                https://www.linkedin.com/in/kyung-soo-lee-6329b2247/
                            </a>
                        </p>
                        <p>
                            <b>GitHub : </b>
                            <a href="https://github.com/keinn51" target="_blank">
                                https://github.com/keinn51
                            </a>
                        </p>
                    </div>
                    <div>
                        <Image
                            width={170}
                            objectFit="contain"
                            alt="none"
                            src={ProfileImage}
                        ></Image>
                    </div>
                </div>
            </div>
            <div id={styles.body}>
                <TableSection tableType="growth" />
            </div>
            <SlideAlert
                open={isAlertOpen}
                text="저장 되었습니다."
                onClose={() => setIsAlertOpen(false)}
                hideduration={1000}
            />
        </div>
    );
};

export default Home;

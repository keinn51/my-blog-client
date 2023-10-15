import styles from '@/styles/home/home.module.scss';
import TableSection from '@/components/TableSection';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import SlideAlert from '@/components/Utils/Common/SlideAlert';
import { showSlideAlert } from '@/data/atoms';

const Home = () => {
    const [isAlertOpen, setIsAlertOpen] = useRecoilState(showSlideAlert);

    return (
        <div id={styles.home}>
            <div id={styles.header}>
                <div id={styles.welcome}>Welcome To My World</div>
                <div id={styles.description}>
                    <p>안녕하세요 개발자 이경수입니다.</p>
                    <p>이 곳은 제가 공부하고, 구현하고, 생각한 것들은 모아둔 사적인 창고입니다.</p>
                    <p>저에 대해서 더 알고 싶으시다면 아래를 참고하시기 바랍니다.</p>
                    <p>
                        <b>Blog : </b>
                        <a href="https://velog.io/@keinn51">https://velog.io/@keinn51</a>
                    </p>
                    <p>
                        <b>LinkedIn : </b>
                        <a href="https://www.linkedin.com/in/kyung-soo-lee-6329b2247/">
                            https://www.linkedin.com/in/kyung-soo-lee-6329b2247/
                        </a>
                    </p>
                    <p>
                        <b>GitHub : </b>
                        <a href="https://github.com/keinn51">https://github.com/keinn51</a>
                    </p>
                </div>
            </div>
            <div id={styles.body}>
                <TableSection tableType="growth" />
                <TableSection tableType="aboutme" />
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

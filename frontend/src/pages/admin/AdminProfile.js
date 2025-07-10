import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <div style={{
                border: '2px solid #aaa',
                padding: '40px 60px',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                fontSize: '1.5rem',
                lineHeight: '2.5rem'
            }}>
                Name: {currentUser.name}
                <br />
                Email: {currentUser.email}
                <br />
                School: {currentUser.schoolName}
            </div>
        </div>
    );
};

export default AdminProfile;

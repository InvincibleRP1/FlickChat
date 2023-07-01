import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { APITest } from "./features/apiTest";
import { UserFeedPage } from "./features/userFeed/userFeed";
import { LoginPage } from "./features/auth/login";
import { BookmarksPage } from "./features/bookmarks/bookmarks";
import { ExplorePage } from "./features/explore/explore";
import { ProfilePage } from "./features/profile/profile";
import { IndividualUser } from "./features/individual-user/individualUser";
import { SignUpPage } from "./features/auth/signup";
import { SinglePost } from "./features/singlePost/singlePost";
import { PrivateRoute } from "./components/privateRoute/privateRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose="600"
        hideProgressBar={true}
        theme="colored"
        limit="1"
        style={{ top: "4.5em", right: "0em" }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserFeedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <BookmarksPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <ExplorePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <PrivateRoute>
              <IndividualUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <PrivateRoute>
              <SinglePost />
            </PrivateRoute>
          }
        />

        <Route path="/test" element={<APITest />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;

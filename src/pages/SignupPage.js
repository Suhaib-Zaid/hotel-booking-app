import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 py-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

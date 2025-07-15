function Login() {
	return (
		<div className="flex items-center justify-center mt-4">
			<div className="p-4 text-center bg-white border rounded-lg shadow-lg w-80">
				<h2 className="mb-4 text-lg font-semibold">로그인</h2>
				<div className="mb-4">
					<input
						type="email"
						placeholder="이메일"
						required
						className="w-full px-4 py-2 border rounded"
					/>
				</div>
				<div className="mb-4">
					<input
						type="password"
						placeholder="비밀번호"
						required
						className="w-full px-4 py-2 border rounded"
					/>
				</div>
				<button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
					로그인
				</button>
			</div>
		</div>
	);
}

export default Login;

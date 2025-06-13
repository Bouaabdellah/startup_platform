const Ping = () => {
  return (
    <div className="absolute -top-1 -right-1">
      <span className="flex size-[11px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
      </span>
    </div>
  );
};

export default Ping;

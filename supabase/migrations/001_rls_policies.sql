-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE brief_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_positions ENABLE ROW LEVEL SECURITY;

-- Users: own data only
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid()::text = id);

CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid()::text = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid()::text = id);

-- Subscriptions: own subscription only
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  USING (auth.uid()::text = user_id);

-- Brief interactions: own interactions only
CREATE POLICY "Users can view own interactions"
  ON brief_interactions FOR SELECT
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own interactions"
  ON brief_interactions FOR INSERT
  WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update own interactions"
  ON brief_interactions FOR UPDATE
  USING (auth.uid()::text = user_id);

-- Stock positions: own positions only
CREATE POLICY "Users can view own positions"
  ON stock_positions FOR SELECT
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own positions"
  ON stock_positions FOR INSERT
  WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update own positions"
  ON stock_positions FOR UPDATE
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete own positions"
  ON stock_positions FOR DELETE
  USING (auth.uid()::text = user_id);
